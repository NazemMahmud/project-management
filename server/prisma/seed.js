var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
const prisma = new PrismaClient();
function deleteAllData(orderedFileNames) {
    return __awaiter(this, void 0, void 0, function* () {
        const modelNames = orderedFileNames.map((fileName) => {
            const modelName = path.basename(fileName, path.extname(fileName));
            return modelName.charAt(0).toUpperCase() + modelName.slice(1);
        });
        for (const modelName of modelNames) {
            const model = prisma[modelName];
            try {
                yield model.deleteMany({});
                console.log(`Cleared data from ${modelName}`);
            }
            catch (error) {
                console.error(`Error clearing data from ${modelName}:`, error);
            }
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataDirectory = path.join(__dirname, "seedData");
        const orderedFileNames = [
            "team.json",
            "project.json",
            "projectTeam.json",
            "user.json",
            "task.json",
            "attachment.json",
            "comment.json",
            "taskAssignment.json",
        ];
        yield deleteAllData(orderedFileNames);
        for (const fileName of orderedFileNames) {
            const filePath = path.join(dataDirectory, fileName);
            const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            const modelName = path.basename(fileName, path.extname(fileName));
            const model = prisma[modelName];
            try {
                for (const data of jsonData) {
                    yield model.create({ data });
                }
                console.log(`Seeded ${modelName} with data from ${fileName}`);
            }
            catch (error) {
                console.error(`Error seeding data for ${modelName}:`, error);
            }
        }
    });
}
main()
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));