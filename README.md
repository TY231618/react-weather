# React with Redux Weather App

A simple React/Redux app using the Open Weather api to display temperature, pressure and humidity of a given US city

## Quick Start Guide

The repository is written in [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [NPM](https://www.npmjs.com/) as the package manager.

**To start the app:**
- To install dependencies, run: `npm install`
- To run: `npm run start` (by default this starts on [localhost:8081](localhost:8081))

## Vision

I first wrote this app using just React and calling the Open Weather api on a inbuilt React function called componentWillMount.  I decided to refactor this to use Redux so that I could split my code into actions and reducers and get an idea of how you connect all these pieces up.

## What I learnt

* How to set up a redux store
* Adding middleware to the store such as ReduxPromise to deal with async calls such as the Open Weather api.
* How to create, implement and export actions which should be plain JS objects... (another reason for using promise middleware)
* How to create, implement and export reducers and create a combineReducer to register all data to state
* How to use connect from react-redux with mapStateToProps and mapStateToDispatch to pass around your apps data
* Basic styling with Materialize by linking the CDN in index.html
* Use of a third party called Sparklines to style my chart data and make it more presentable


