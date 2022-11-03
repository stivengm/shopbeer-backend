export interface Response {
    code: string
    type: "success" | "error",
    message: string,
    data: any
}