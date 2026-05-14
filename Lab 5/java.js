var board = ['', '', '', '', '', '', '', '', ''];
var player = 'X';
var buttons = document.getElementsByClassName('button');
var resetBtn = document.getElementsByClassName('res')[0];
var statusEl = document.getElementById('status');
if (!statusEl) {
    statusEl = document.createElement('div');
    statusEl.id = 'status';
    statusEl.className = 'status';
    if (resetBtn && resetBtn.parentNode) resetBtn.parentNode.insertBefore(statusEl, resetBtn);
}

var wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function setStatus(text) {
    statusEl.innerText = text;
}

function displayPlayer(p) {
    return p === 'X' ? 'Player 1' : 'Player 2';
}

for (var i = 0; i < buttons.length; i++) {
    (function(i) {
        var btn = buttons[i];
        if (!btn) return;
        btn.innerText = '';
        btn.disabled = false;
        btn.onclick = function() {
            if (board[i] !== '' || player === null) return;
            board[i] = player;
            btn.innerText = player;
            btn.disabled = true;

            if (checkWin()) {
                setStatus(displayPlayer(player) + ' wins!');
                highlightWin();
                player = null;
                return;
            }

            if (checkTie()) {
                setStatus('Draw!');
                player = null;
                return;
            }

            if (player === 'X') player = 'O'; else player = 'X';
            setStatus(displayPlayer(player) + "'s turn");
        };
    })(i);
}

function checkWin() {
    for (var i = 0; i < wins.length; i++) {
        var a = wins[i][0], b = wins[i][1], c = wins[i][2];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) return true;
    }
    return false;
}

function highlightWin() {
    for (var i = 0; i < wins.length; i++) {
        var a = wins[i][0], b = wins[i][1], c = wins[i][2];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            if (buttons[a]) buttons[a].classList.add('win');
            if (buttons[b]) buttons[b].classList.add('win');
            if (buttons[c]) buttons[c].classList.add('win');
            break;
        }
    }
}

function checkTie() {
    for (var i = 0; i < board.length; i++) if (board[i] === '') return false;
    return true;
}

function resetGame() {
    for (var i = 0; i < board.length; i++) {
        board[i] = '';
        if (buttons[i]) { buttons[i].innerText = ''; buttons[i].disabled = false; buttons[i].classList.remove('win'); }
    }
    player = 'X';
    setStatus(displayPlayer(player) + "'s turn");
}

if (resetBtn) resetBtn.onclick = resetGame;

setStatus(displayPlayer(player) + "'s turn");