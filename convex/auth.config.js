// const rawDomain = process.env.CLERK_JWT_ISSUER_DOMAIN || "";
// // Convex expects the issuer domain without protocol. Strip https:// if present.
// const domain = rawDomain.replace(/^https?:\/\//, "").trim();

// const config = {
//   providers: [
//     {
//       domain,
//       applicationID: "convex",
//     },
//   ],
// };

// export default config;

export default{
    providers: [
        {
            domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
            applicationID: "convex",
        },
    ],
};
