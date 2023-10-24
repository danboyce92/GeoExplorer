# Geo-Explorer

Geo-Explorer is a web app that upon a user's request, communicates with the public REST Countries API to display information about chosen countries.

## Installation

If you want to use this app, you can navigate to https://geo-explorer-henna.vercel.app to access the live site. Alternatively, if you wish to install the app locally, you can do so by following the instructions below.

\*Installing this project requires node and git.

1. Open a terminal and navigate to the empty directory you want to store the app in.

2. In the terminal of the directory run the following git command:

```bash
git clone https://github.com/danboyce92/GeoExplorer.git
```

3. After everything has been downloaded, in your terminal navigate to the client directory and run the following command:

```bash
npm install
```

4. When that finishes you can run this command to start the frontend:

```bash
npm run dev
```

5. You will then need to open a second terminal and navigate to the server directory and also run the install command:

```bash
npm install
```

6. Afterward, you can start the server by running the command:

```bash
npm run watch
```

7. Then you should be able to access the app by opening an internet browser and visiting:

http://127.0.0.1:5173/

## Usage

Using the app couldn't be more straight forward, just type the name of the country you want to search for into the input field and click the search button.

If you spelled the name correctly you should see some trivia relevant to the country appear below the search bar including things like the name of the capital, how large the population is, what the flag or coat of arms looks like.

If you receive the error message then you have either misspelled the name of the country or it's possible the country could be registered under a different name. ( I've noticed that England, Scotland and Wales are unavailable in this API. You have to search United Kingdom. With this in mind it's possible there are other similar situations out there waiting to be discovered. )

There has also been a random button added to the search bar. This will select a country from the API at random and return the results.

## Moving forward

This app is pretty simple in nature and now that the core functionality has been achieved, considerations on where it could be taken can be contemplated.

Adding a random button that would return a random country from the API seemed like an interesting addition and was relatively straightforward to implement. **- This feature has been added.**

If there was more time to implement new features, one that could be interesting or useful could be adding a backward and a forward button. By implementing a linked list, it could be possible to add a forward and backward button to move through previous searches.

Another idea that could be useful might be to add an advanced button that opens a dropdown menu that lets the user decide what information they are looking for. Instead of trying to find space in the ui to display all the information, you could let the user declare what they are looking for and then display it for them.

## Final Notes

_Frontend design & Ui usability_

This Ui was designed with simplicity and ease of use in mind. Conscious of visual-hierarchy the aim was to make it as easy as possible to use and understand.

_Quality of country information being rendered_

Regarding the quality of the information being rendered, an issue was identified which encouraged the alteration of the endpoint used. It was noticed that when using the regular name endpoint that if you search Ireland, the United Kingdom was the first search to be returned. This was due to Northern Ireland being included among the names associated with the United Kingdom but this endpoint obviously caused inaccuracy that should be addressed.
The project used the Full Name endpoint instead, there were more accurate responses observed with this endpoint.

_Loading display logic_

The loading skeleton was a strange hurdle. Because of the nature of React and it's rendering optimizations, I found it difficult to naturally get the skeleton to appear for a moment while the app was waiting for a response from the API. With the introduction of the redux store the loading state was able to be altered in the relevant slice, pending sets loading to true and fulfilled or rejected sets it to false. The only thing about this that is undesirable and could warrant further work is that with some searches it takes longer to load the coat of arms which doesn't look very good.

_Error handling_

Time and consideration were given to error handling. In both the client and server, with errors being logged to the console or error messages being displayed on the ui. With an app that has such simple functionality, edge cases are a rare find.

_Code structure & quality_

This project aimed to be as modular as possible. Keeping individual components small and compact and trying to leave components with a single responsibilty.
Also aimed to keep code repitition to a minimum by using for example sass mixins and a custom react hook.

_Tests_

There are some simple tests available for both the client and the server. To access either you just have to navigate to either the client or server directory and run the following command:

```bash
npm run test
```
