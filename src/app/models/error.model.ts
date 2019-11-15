export class Error {
    constructor(
        public status: string,
        public message: string,
        public url: string
    ) {}
}