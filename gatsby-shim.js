import { murmurhash } from "babel-plugin-remove-graphql-queries/murmur"
import {
  stripIgnoredCharacters,
} from "graphql/utilities/stripIgnoredCharacters"

const GATSBY_HASH_SEED = "abc"

const hashQuery = (query) =>
  murmurhash(
    stripIgnoredCharacters(query),
    GATSBY_HASH_SEED
  ).toString()

export const graphql = query => hashQuery(query.raw[0])