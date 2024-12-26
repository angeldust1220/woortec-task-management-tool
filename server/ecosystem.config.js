module.exports = {
    apps: [
      {
        name: "woortec-task-management-tool",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };
