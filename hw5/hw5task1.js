//figures
const PAWN_BLACK = '&#9823;';
const PAWN_WHITE = '&#9817;';
const HORSE_BLACK = '&#9822;';
const HORSE_WHITE = '&#9816;';
const ELEPHANT_BLACK = "&#9821;";
const ELEPHANT_WHITE = "&#9815;";
const ROOK_BLACK = '&#9820;';
const ROOK_WHITE = '&#9814;';
const QUEEN_BLACK = '&#9819;';
const QUEEN_WHITE = '&#9813;';
const KING_BLACK = '&#9818;';
const KING_WHITE = '&#9812;';

//figures organization
const WHITE_ORGANIZATION = [ROOK_WHITE, HORSE_WHITE, ELEPHANT_WHITE, QUEEN_WHITE, KING_WHITE, ELEPHANT_WHITE, HORSE_WHITE, ROOK_WHITE];
const BLACK_ORGANIZATION = [ROOK_BLACK, HORSE_BLACK, ELEPHANT_BLACK, QUEEN_BLACK, KING_BLACK, ELEPHANT_BLACK, HORSE_BLACK, ROOK_BLACK];

//rows of figures
const ROW_WHITE_REGUARD = 0;
const ROW_WHITE_VANGUARD = 1;
const ROW_BLACK_REGUARD = 7;
const ROW_BLACK_VANGUARD = 6;

//table tags
const TAGS_BEGIN_TABLE = "<table><tbody>";
const TAGS_END_TABLE = "</tbody></table>";
const TAG_BEGIN_ROW = "<tr>";
const TAG_END_ROW = "</tr>";
const TAG_END_CELL = "</td>";

//ascii value for getting chars of alphabet
const ASCII_START_ALPHABET = 64;

//rows and columns not for playing
const COLUMN_OF_NUMBERS = 0;
const ROW_OF_ALPHABET = 8;

//colors
const COLOUR_WHITE = 'white';
const COLOUR_BLACK = 'black';

var board = [];

function Cell(color, figure) {
    this.color = color;
    this.figure = figure;
}

function isWhiteReugard(rowNumber) {
    return rowNumber === ROW_WHITE_REGUARD;
}

function isBlackReugard(rowNumber) {
    return rowNumber === ROW_BLACK_REGUARD;
}

function isWhiteVanguard(rowNumber) {
    return rowNumber === ROW_WHITE_VANGUARD;
}

function isBlackVanguard(rowNumber) {
    return rowNumber === ROW_BLACK_VANGUARD;
}

function initBoard() {
    var isWhite = true;
    var figure;
    for (var i = 0; i < 8; i++) {
        board.push([]);
        for (var j = 0; j < 8; j++) {
            //define figure
            if (isWhiteVanguard(i)) {
                figure = PAWN_WHITE;
            } else if (isBlackVanguard(i)) {
                figure = PAWN_BLACK;
            } else if (isWhiteReugard(i)) {
                figure = WHITE_ORGANIZATION[j];
            } else if (isBlackReugard(i)) {
                figure = BLACK_ORGANIZATION[j];
            } else {
                figure = null;
            }
            //add figure to cell
            board[i].push(new Cell(isWhite ? COLOUR_WHITE : COLOUR_BLACK, figure));
            //change next cell's colour 
            isWhite = !isWhite;
        }
        //change next row's cell's colour
        isWhite = !isWhite;
    }
}

function getColourOfCell(row, col) {
    if (row != ROW_OF_ALPHABET && col != COLUMN_OF_NUMBERS) {
        //column minus 1 cause we have column of numbers
        var color = board[row][col-1].color;
        return color;
    } else {
        return '';
    }
}

function convertActualBoardToHTMLTable() {
    var resultTable = TAGS_BEGIN_TABLE;

    for (var row = 0; row < 9; row++) {
        //build row
        resultTable += TAG_BEGIN_ROW;

        for (var col = 0; col < 9; col++) {
            //build cell with colour and figure
            //class of td is ID for a colour
            resultTable += '<td class="' + getColourOfCell(row, col) + '" >';

            //TODO: refactoring
            if (col === COLUMN_OF_NUMBERS && row != ROW_OF_ALPHABET) {
                resultTable += (row + 1);
            } else if (row === ROW_OF_ALPHABET && col != COLUMN_OF_NUMBERS) {
                //get char from 'A' to 'H'
                resultTable += String.fromCharCode(ASCII_START_ALPHABET + col);
            } else if (col != COLUMN_OF_NUMBERS) {
                //column minus 1 cause we have column of numbers
                var figure = board[row][col-1].figure;
                //set space value for the cell if figure is not exists
                resultTable += figure == null ? ' ' : figure;
            }

            //end cell's building
            resultTable += TAG_END_CELL;
        }
        //end row's building
        resultTable += TAG_END_ROW;  
    }
    resultTable += TAGS_END_TABLE;
    return resultTable;
}

initBoard();

addElementToDocument(convertActualBoardToHTMLTable());

//TODO: cicle of game, figures moving