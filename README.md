# Knot - example of JS + Python on Databricks Apps


The idea of a combined app is that the frontend is built in JS and modern frameworks like React/Vue/Svelte, and the backend is written in Python. 
Databricks Apps can easily host such applications, but this requires some specifics in terms of how the app should be built and used. 

## Prerequisites

- Databricks CLI configured
- `uv` installed
- `yarn` installed

## Custom build hook

To prepare the app for deployment, we need to:
1. build the frontend
2. prepare the wheel and put it into the `./requirements.txt` as a reference

Take a look at [`build.py`](./hooks/build.py) for the details.

## Deploying and running the app

1. Run the deploy command for Databricks Bundles:
```bash
databricks bundle deploy -p <your-profile-name>
```

2. Run the app:
```bash
databricks bundle run knot -p <your-profile-name>
```