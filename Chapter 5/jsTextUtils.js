'use strict'
const s = prompt( 'Tilføj det ord du vil finde første, sidste og midten af' );

function first( s ) {
  return s.charAt( 0 );
}

function last( s ) {
  return s[ s.length - 1 ];
}

function middle( s ) {
  return s.substring( 1, s.length - 1 );
}

function isPalindrome( palindrome ) {
  if ( palindrome.length <= 1 )
    return true;
  if ( first( palindrome ) === last( palindrome ) &&
    isPalindrome( middle( palindrome ) )

    return true;
    return false;
  }
