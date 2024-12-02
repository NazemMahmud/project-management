# Run Seed

```shell
npm run seed
```

### Explanation:
In package.json file: 
```json
"scripts": {
    "seed": "tsx prisma/seed.ts"
}
```

Previously used:
```json
"scripts": {
    "seed": "ts-node prisma/seed.ts"
},
```

But ts-node does not work with .ts file. Solution is from here: [Github link](https://github.com/prisma/prisma/discussions/20369#discussioncomment-10066706)

# Prisma commands:

- Initial prisma: `npx prisma init`
- Generate prisma file: `npx prisma generate`
- Prisma schema will be loaded from prisma\schema.prisma
- Migrate initially: `npx prisma migrate dev --name init`