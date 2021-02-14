// Some simple utility methods for manipulating the DOM

// Shorthand for document.querySelector on everything)
export const el = function( domElement:string ) {
    
    if ( domElement.charAt(0) === '.' ) return document.querySelectorAll( domElement )

    if ( domElement.charAt(0) === '#' ) return document.querySelector( domElement )

    // Else, we get here and we just grab the name of the selected element.
    return document.querySelector( domElement )
}

// Shorthand for document.createElement
export const create = ( elementType:string ): HTMLElement => document.createElement( elementType )
