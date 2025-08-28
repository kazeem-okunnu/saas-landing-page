export const pricingPlans = [
   { title: "free Plan",
    price: 0,
    description: "perfect for small scale usage and testing",
    features :[
        "up to 3 forms per month",
        "basic AI form builder",
        "basic form cusomization",
        "data export in csv and excel formats"
    ],
    isPopular: false
   },
   { title: "Hobby Plan",
    price: 15,
    description:"perfect for growing buisnesses needing advanced features",
    features :[
        "up to 100 forms per month",
        "conditional logic and branching",
        "basic analytic and reporting",
        "everything included in free plan"
    ],
    isPopular: true
   },
   { title: "Pro Plan",
    price: 30,
    description:"for large buisnesses and enterprise with custom needs.",
    features :[
        "unlimited forms per month",
        "premium AI form builder & suggestions",
        "advanced conditional logic and branching",
        "api access for custom integrations"
    ],
    isPopular:false,
   },

]