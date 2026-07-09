const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@company.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage UI.",
        taskDate: "2026-07-05",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve mobile navigation issue.",
        taskDate: "2026-07-06",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Login Page",
        taskDescription: "Completed login page.",
        taskDate: "2026-07-01",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer",
        taskDescription: "Created website footer.",
        taskDate: "2026-06-30",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Waiting for backend API.",
        taskDate: "2026-07-08",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "priya@company.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Employee Form",
        taskDescription: "Create employee registration form.",
        taskDate: "2026-07-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Validation",
        taskDescription: "Implement form validation.",
        taskDate: "2026-07-06",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Completed landing page.",
        taskDate: "2026-06-28",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dark Mode",
        taskDescription: "Dark mode implementation failed.",
        taskDate: "2026-07-02",
        category: "UI"
      }
    ]
  },

  {
    id: 3,
    firstName: "Aman",
    email: "aman@company.com",
    password: "123",

    taskCount: {
      active: 3,
      newTask: 1,
      completed: 0,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "REST API",
        taskDescription: "Develop employee REST APIs.",
        taskDate: "2026-07-05",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Auth",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-07-07",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database",
        taskDescription: "Create employee schema.",
        taskDate: "2026-07-08",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Service",
        taskDescription: "SMTP configuration failed.",
        taskDate: "2026-07-03",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "neha@company.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 0,
      completed: 3,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test dashboard functionality.",
        taskDate: "2026-07-06",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Report",
        taskDescription: "Reported UI bugs.",
        taskDate: "2026-06-29",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Regression Test",
        taskDescription: "Completed regression testing.",
        taskDate: "2026-06-27",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Performance Test",
        taskDescription: "Optimized load performance.",
        taskDate: "2026-06-26",
        category: "QA"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohit",
    email: "rohit@company.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy project to Vercel.",
        taskDate: "2026-07-05",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "CI/CD",
        taskDescription: "Configure GitHub Actions.",
        taskDate: "2026-07-09",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Docker Setup",
        taskDescription: "Created Docker container.",
        taskDate: "2026-07-01",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Nginx Config",
        taskDescription: "Deployment configuration failed.",
        taskDate: "2026-07-02",
        category: "Server"
      }
    ]
  }
];

const admin = {
  id: 101,
  firstName: "Admin",
  email: "admin@company.com",
  password: "123"
};

export const setdata=()=>
{
    localStorage.setItem("employees",JSON.stringify(employees))
     localStorage.setItem("admin",JSON.stringify(admin))

}

export const getdata = () => {
    const empdata = JSON.parse(localStorage.getItem("employees"));
    const admindata = JSON.parse(localStorage.getItem("admin"));

    return { employees: empdata, admin: admindata };
};