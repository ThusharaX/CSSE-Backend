/* eslint-disable no-undef */
import request from "supertest";
import app from "../app";
const db = require("../util/testing.db");

beforeAll(async () => await db.connect());
// afterEach(async () => await db.clearDatabase());
afterAll(async () => {
	await db.clearDatabase();
	await db.closeDatabase();
});

describe("Test the root path", () => {
	describe("GET /", () => {
		it("should return 200 OK & Welcome text", async () => {
			const response = await request(app).get("/");
			expect(response.status).toBe(200);
			expect(response.text).toBe("CSSE Project API");
		});
	});
});

describe("Admin", () => {
	const user = {
		name: "admin",
		email: "admin@gmail.com",
		password: "pass",
	};

	let token = "";
	let id = "";

	describe("POST /admin/signup", () => {
		it("Should return 201 OK & Admin object", async () => {
			const response = await request(app).post("/admin/signup").send(user);
			expect(response.status).toBe(201);
		});
	});

	describe("POST /admin/login", () => {
		it("Should return 201 OK & Admin object", async () => {
			const response = await request(app).post("/admin/login").send({
				email: user.email,
				password: user.password,
			});
			expect(response.status).toBe(201);
			expect(response.body.token).toBeTruthy();
			token = response.body.token;
			id = response.body._id;
			expect(response.body.email).toBe(user.email);
		});
	});

	describe("GET /admin/:id", () => {
		it("Should return 201 OK & Admin object", async () => {
			const response = await request(app).get(`/admin/${id}`).set("Authorization", `Bearer ${token}`);
			expect(response.status).toBe(201);
			expect(response.body.name).toBe(user.name);
			expect(response.body.email).toBe(user.email);
		});
	});
});

describe("Site Manager", () => {
	const user = {
		name: "site manager",
		email: "site-manager@gmail.com",
		password: "pass",
		contact: "0712345678",
		nic: "123456789V",
	};

	let token = "";
	let id = "";

	describe("POST /site-manager/signup", () => {
		it("Should return 201 OK & Site Manager object", async () => {
			const response = await request(app).post("/site-manager/signup").send(user);
			expect(response.status).toBe(201);
		});
	});

	describe("POST /site-manager/login", () => {
		it("Should return 201 OK & Site Manager object", async () => {
			const response = await request(app).post("/site-manager/login").send({
				email: user.email,
				password: user.password,
			});
			expect(response.status).toBe(201);
			expect(response.body.token).toBeTruthy();
			token = response.body.token;
			id = response.body._id;
			expect(response.body.email).toBe(user.email);
		});
	});

	describe("GET /site-manager/:id", () => {
		it("Should return 201 OK & Site Manager object", async () => {
			const response = await request(app).get(`/site-manager/${id}`).set("Authorization", `Bearer ${token}`);
			expect(response.status).toBe(201);
			expect(response.body.name).toBe(user.name);
			expect(response.body.email).toBe(user.email);
		});
	});
});
