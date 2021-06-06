import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { Options } from "@mikro-orm/core";
import path from 'path';

export default {
	migrations: {
		path: path.join(__dirname,'./migrations'), // path to the folder with migrations
    	pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
	},
	entities: [Post],
	dbName: 'reddit_clone',
	user: 'postgres',
	password: 'postgres',
	type: 'postgresql',
	debug: !__prod__
} as Options