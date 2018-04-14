# reversi

CLI reversi game made by Node.js

### How to play

Clone or download this repository and

```
$ node main.js
```

### Sample output

**Playing board:**

```
| |a|b|c|d|e|f|g|h|
|0| | | | | | | | |
|1| | | | | | | | |
|2| | | | | | | | |
|3| | | |x|o| | | |
|4| | | |o|x| | | |
|5| | | | | | | | |
|6| | | | | | | | |
|7| | | | | | | | |

player1, enter your move (ex: d3)
c4
| |a|b|c|d|e|f|g|h|
|0| | | | | | | | |
|1| | | | | | | | |
|2| | | | | | | | |
|3| | | |x|o| | | |
|4| | |x|x|x| | | |
|5| | | | | | | | |
|6| | | | | | | | |
|7| | | | | | | | |

player2, enter your move (ex: d3)
e5
| |a|b|c|d|e|f|g|h|
|0| | | | | | | | |
|1| | | | | | | | |
|2| | | | | | | | |
|3| | | |x|o| | | |
|4| | |x|x|o| | | |
|5| | | | |o| | | |
|6| | | | | | | | |
|7| | | | | | | | |
```

**Result:**

```
＼(^o^)／ Game finished ＼(^o^)／
player1: 30 vs player2: 34

Player2 win!
```
