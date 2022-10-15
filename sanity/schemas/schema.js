import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from 'all:part:@sanity/base/schema-type';

import services from "./services";
import about from "./about";
import projects from "./projects";
import skills from "./skills";
import contact from "./contact";

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        about,projects,skills,contact,services
    ])
})
