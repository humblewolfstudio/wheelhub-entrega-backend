const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Wheelhub Test Backend",
            version: "1.0.0",
            description:
                "Test de Backend",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Noel",
                email: "noelcabus01@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./dist/routes/*.js"],
};

export default options;