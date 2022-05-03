import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import productresolver from './products/products.resolvers.js';
import orderresolver from './orders/orders.resolvers.js';
import path  from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(path.dirname(import.meta.url));
// **/*.graphql is a glob pattern for all files ending in .graphql where ** is for directroy-subdirectory and the *.graphql is the file extension 
const typesArr = loadFilesSync(path.join(__dirname, '**/*.graphql'));
// console.log(typesArr);
// const resolversArr = loadFilesSync(path.join(__dirname, '**/*.resolvers.js')); 
// this is not working as loadFilesSync is not compatible with ESM
const resolversArr = [productresolver, orderresolver];
//console.log(resolversArr);

const schema = makeExecutableSchema({
    typeDefs: typesArr,
    resolvers: resolversArr,
});

export {
    schema,
};