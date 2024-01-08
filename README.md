# TitanTalks
Titan Talks is a social media platform designed and created specifically for Titans. A place where you can connect and interact with Titans all across campus. From sharing images to simply chatting and even talking to others, there's a place for every Titan here.

# Scrum Artifacts
The product definition, which contains the planned features, user personas, and user stories for the project can be viewed in the "Product Definition" PDF file. The product backlog for each sprint can be viewed in its repsective product backlog PDF file. The sprint backlogs, which contain the various tasks worked on every sprint can be viewed by navigating to the "Projects" tab of this repository and choosin

## Environment Installation
* Download and install NodeJS [https://nodejs.org/](https://nodejs.org/en/)
* Install Expo CLI `npm install -g expo-cli`

## Project's Dependencies Installation
* From `server` directory, run `npm install`.
* From `mobileapp` directory, run `npm install`.

## Configuration Overview
The project requires 2 configuration files:
* `.env` file in `mobileapp` directory.
* `default.json` file in `server/config` directory.
<img src="https://github.com/NLTN/Assets/blob/main/TitanTalks/folderStructures-LocalEnv.png?raw=true">

## How to config and run the server
* Download this config file [default.json](https://github.com/NLTN/Assets/blob/main/TitanTalks/server/config/default.json) and save it to `server/config/` directory.
* Open `default.json` file with a text editor to change these values:
<table>
  <thead>
    <tr>
      <th></th>
      <th>Descriptions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>YOUR_SERVER_IP</td>
      <td>Your LAN IP. Example: 192.168.1.50</td>
    </tr>
    <tr>
      <td>YOUR_EXPO_URL</td>
      <td>
        Example: exp://127.0.0.1:19000
        <br/>
        <a href="https://github.com/NLTN/TitanTalks/wiki/Instructions#how-to-find-expo-url">Learn how to find Expo URL</a>
      </td>
    </tr>
    <tr>
      <td>YOUR_GITHUB_OAUTH_API_KEY</td>
      <td rowspan=2>
        If you don't have one, get it here <a href="https://github.com/settings/developers">GitHub Developer Settings<a/>
        <br/>
        <a href="https://github.com/NLTN/TitanTalks/wiki/Instructions#how-to-create-github-oauth-application">Learn how to create GitHub OAuth App</a>
        <br/>
        <a href="https://github.com/NLTN/TitanTalks/wiki/Instructions#how-to-find-your-github-api-key">Learn how to find GitHub API Key & Secret</a>
      </td>
    </tr>
    <tr>
      <td>YOUR_GITHUB_OAUTH_API_SECRET</td>
    </tr>
  </tbody>
</table>

* From `server` directory, run `npm start` to start the server


## How to config and run the mobile app
* From `mobileapp` directory, create a file named `.env`
* Open `.env` and insert this line `API_URL=THE_URL_TO_YOUR_SEVER:PORT`. Example [.env](https://github.com/NLTN/Assets/blob/main/TitanTalks/mobileapp/.env) file
* From `mobileapp` directory, run `npm start` to start the app.

:warning: To make sure your updates in `.env` file to take effect, you can run `expo start --clear` to clean up the CACHE.


## Demo
<img src="https://github.com/NLTN/TitanTalks/blob/main/demo.gif" height="600">
