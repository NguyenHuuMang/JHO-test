import { User } from "../common/type";

export const fakeUser: User[] = [
    {
        id: 1,
        name: 'Sébastien Hanouna',
        email: "admin@example.com",
        password: "Admin@123",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJjb21wYW55X2lkIjoxLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZmlyc3RfbmFtZSI6IlN1cGVyIiwibGFzdF9uYW1lIjoiQWRtaW4iLCJ0aXRsZSI6Ik1yIiwicm9sZSI6IlN1cGVyX0FkbWluIiwiYXZhdGFyIjoiIiwic3RhdHVzIjoxLCJhZGRlZF9ieSI6MSwiYWxsb3dfY29tcGFueSI6bnVsbCwiaWF0IjoxNzQ1NDcwMDAxLCJleHAiOjE3NDU1MTQwNDF9.JXsRJ9vs0-HFnBJzqFq8nhn_HT2rGPYP9y3AEsJnqD0",
        role: "CEO, Admin",
        avatar: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
    }
]