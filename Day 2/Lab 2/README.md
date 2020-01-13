![logo_face](https://www.focusacademy.in/images/face_logo.svg)

## LAB | Dream Team
    
Alex is a young enterprenuer who is out to assemble his own football team. Ambitious much? Well, he seems to have to resources to do it though. He has collected data of players across various teams. He now needs to arrange this data so he can make sense of it. He needs an application that will help him compare and contrast abilities of different players.

Alas, for all the money in the world, he can't find a decent programmer to help him with this task. He's designed the front-end of the application and it looks great. He needs **YOU** to help him code functionalities in the back-end though. Go to the `src/app.js` file and complete all the unfinished code to propel this young man's football dream.

## Requirements

- Fork this repo
- Clone this repo
- Practice JavaScript basics - _operators, conditions, loops_

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Starter code

The `src/data.js` contains an array of 250 players. We are talking about the array of 250 _objects_ containing the info about each movie. Here is one example of how the data is displayed:

```javascript
{
    name: 'Ashley Young',
    age: 34,
    debut: 2011,
    team: 'Manchester Utd',
    position: 'Defender',
    country: 'England',
    awards: [
        {
            name: "Golden Foot",
            year: 2015
        }
    ]
}
```

### Tests

Ohh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do.

## Trial 1: Gotta coach em all!

Every team starts off with a manager. We need someone to take care of them when Alex isn't around. Create a function `createManager()` that gets the manager's details `managerName, managerAge, currentTeam, trophiesWon` in the same order, and _return an array_ with the manager's details.

## Trial 2: Get in form!

The coach has prepared a plan of attack for the team. He has the formation ready and will provide us with an array `[forwards, midfielders, defenders]`. He will give us the numbers and we'll need to print that layout on our screen so that we know who to pick (for instance, how many midfielders do we need?). Create a function `createFormation()` that _returns an object_ with the data and keys in the order given in the array.

## Trial 3: Filter by debut year

Alex needs to know when certain player's debuted.