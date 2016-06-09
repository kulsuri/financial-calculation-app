# financial-calculation-app
Calculations
---
- net present value 
- internal rate of return

Specification
---
- attractive, simple and dynamic UI
- REST API calls javascript library containing NPV calculation function
- seneca micro service architecture 

Installation Instructions
---
- clone repo
- open cmd and cd to the directory containing app
- run "npm install" in cmd
- run "node app.js" in cmd
- open another command prompt run "node scripts/seneca.js"
- open "http://localhost:3000/npv" in browser

Using REST API
---

NPV
- POST 
- http://localhost:3000/npv
- Body: {"discountRate": VALUE, "initialInvestment": VALUE, "years": VALUE, cashFlow}
- E.g. {"discountRate": 10, "initialInvestment": 1000, "years": 4, [250, 500, 400, 600]} 
- Res = {"npv": 350.83}

IRR
- POST 
- http://localhost:3000/irr
- var cashFlow = [inital investment, cashFlowYear1, cashFlowYear2, cashFlowYear3, etc]
- Body: {cashFlow}
- E.g. {[1000, 250, 500, 400, 600]} 
- Res = {"irr": 23.53}
