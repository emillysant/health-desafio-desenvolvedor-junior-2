import { IdGenerator } from "./services/IdGenerator"

console.log("Hello from test.ts")

const id = new IdGenerator().generate()

console.log({id})