
/**
 * 1. functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
 */

console.log("1. The current string is: ", getDigits('000111stefi'));

function getDigits(txt)
{
    let generatedStringForNumbers = null;
    let generatedStringForLetters ="";

    for ( let i=1; i<=txt.length; i++)
    {
        var currentCharacter = txt.slice(i-1, i );
        //console.log("Current Character is: ", currentCharacter, ";  i = ", i );
        if (currentCharacter == 0)
        {
            if (generatedStringForNumbers === null)
            {
                generatedStringForNumbers = currentCharacter;
            }
            else 
            {
                generatedStringForNumbers += "" + currentCharacter;
            }
        }
        else 
        {
             if (Number(currentCharacter))
            {
                if (generatedStringForNumbers === null)
                {
                    generatedStringForNumbers =  Number(currentCharacter);
                }
                else
                {   
                    generatedStringForNumbers+= "" + currentCharacter;
                }   
            }
            else
            {
                generatedStringForLetters = generatedStringForLetters.concat(currentCharacter);
            }
        }
    }
    if (txt.length === generatedStringForLetters.length)
    {
        return ""; 
    }
    return generatedStringForNumbers;    
}

/**
 * 2. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv
 */
console.log("2. The current string is: ", getLetters('000111stefi123stefi123'));

function getLetters(parameter)
{
    let generatedString ="";
    for ( let i=1; i<=parameter.length; i++)
    {
        var currentCh = parameter.slice(i-1, i );
        if ((/[a-zA-Z]/).test(currentCh))
        {
            generatedString = generatedString.concat(currentCh);
        }
    }
    return generatedString
}



/**
 * 3.O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
 */
let firs5tLetters = getFirst5Letters("111asdfg1111efghfghfgh");
console.log("3. First 5 letters are : ",firs5tLetters);

function getFirst5Letters(parameter)
{ 
    let generatedStringFor5Letters ="";
    let contor = 0;
    for ( let i=1; i<=parameter.length; i++)
    {
        var currentCh = parameter.slice(i-1, i );
        if ((/[a-zA-Z]/).test(currentCh))
        {
          contor++;
          if (contor <= 5)
          {
            generatedStringFor5Letters = generatedStringFor5Letters.concat(currentCh);
          }
        }
    }
    return generatedStringFor5Letters;
}


 /**
 * 4.O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate
 */

let cars = ["a", "b", "c"];
console.log("4. concatenate: ",concatenate(cars));

function concatenate(arr)
{
    let stringConcat ="";
    for (let i=0; i < arr.length; i++)
    {        
        stringConcat = stringConcat.concat(arr[i]);
    }
    return stringConcat;
}


/**
 * 5.O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
 * 
 */
let param = ["100","299"];
let test =  getAllDigits(param);
console.log("5. getAllDigits :",test);
 
function getAllDigits(array)
{  
    let generatedString = "";
    let currentCharacter ="";
    let ValCurr ="";
    for ( let i=1; i<=array.length; i++)
    {
         currentCharacter = array.slice(i-1, i);
        //if (String(currentCharacter))
        currentCharacter = String(currentCharacter);
        if (currentCharacter.length >= 1 )
        {
            for ( let j=0; j<=currentCharacter.length; j++)
            {
                ValCurr = currentCharacter.charAt(j);
              
               if (Number(ValCurr))
                {
                    generatedString = generatedString+ValCurr;
                }
                else if (ValCurr == 0 )
                {
                    generatedString = generatedString + ValCurr;
                }
            }
        }  
    }
    return generatedString;
}


/**
 * 6.O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
 */
let testArray = invertAllStrings(["a1","b2","c3"]);
console.log("5. invertAllStrings :",testArray);
function invertAllStrings(array)
{
   
    let currentCharacter ="";
    let ValCurr ="";
    let aux ="";
    let counter =0;
    let newArray  = [];
    for ( let i=1; i<=array.length; i++)
    {
        currentCharacter = array.slice(i-1, i);
        currentCharacter = String(currentCharacter);
        aux = currentCharacter.reverse;
        newArray[counter] = newArray.push(aux);
        counter++
       
    }
    return newArray;
}

/**
 * 7.Calculeaza factorialul unui numar ("factorial")
 * 
 * 
 */ 
let factorialResult = factorial(3);
console.log("7. N factorial is : ",factorialResult);
function factorial(n)
{
    
    var result = n;
    if (n === 0 || n === 1) 
        return 1; 
    while (n > 1) { 
        n--;
        result *= n;
    }
    return result; 
}
 /**
 * 8.Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
 */
console.log(cmmdc(12, 13));
console.log(cmmdc(9, 3));

function cmmdc(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  

/**
 * 9.Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
 */
console.log(cmmmc(3,15));
console.log(cmmmc(10,15));

function cmmmc(x, y) 
{
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / numbers(x, y));
}
 
function numbers(x, y) 
{
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) 
    {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

 
 
/**
 * 10.Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
 */
console.log("array",divizori(64));
function divizori(n)
{
    var arrayOfDivisors = [];   
    var divisors = 0;
    let mod = n;
   
    mod = n;
    while (mod > 0){
      if(n % mod === 0)
      {
        divisors++;
        
        console.log("mod :",mod);
        if (mod === n || mod === 1)
        {
            console.log("mod",mod, "egal");
        }
        else
        {
            arrayOfDivisors.push(mod);
        } 
      }
      mod--;
    }
    return arrayOfDivisors.reverse();
}

/**
 * 11.O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
 */

console.log("11. The invers numbers is: ", palindrom(121));
function palindrom(n)
{
    let originalNumber = Number(n);
    let result = '';
    if(typeof n === 'number')
    {
         n = '' + n + '';
    }

    for(var i = n.length; i >= 0; i--)
    {
        result += n.charAt(i);
    }

    result = parseInt(result);
    if (result === originalNumber)
    {
        return true;
    }
    return false;
  
}

/**
 * 12.O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
 */

let arrayForSort = [12,10,8,6,2,14];
console.log("12. : ", sort(arrayForSort));
function sort(sArray)
{
    let sortedArray = [];
    for( let i=0 ; i< sArray.length ; i++)
    {
        if (sArray[i] % 2 === 0)
        {
            sortedArray.push(sArray[i]);
        }
    }
    // for( let i=1 ; i< sortedArray.length ; i++)
    // {
    //     while ( sortedArray[i-1] > sortedArray[i] )
    //     {
    //         console.log("conparare:", sortedArray[i-1], "<", sortedArray[i]);
    //         let auxiliar = sortedArray[i-1];
    //         sortedArray[i-1] = sortedArray[i];
    //         sortedArray[i] = auxiliar;
    //     }
    // }
    sortedArray = sortedArray.sort((a, b) => a - b);
    return sortedArray;
}


/**
 * 13.O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
 */

let arrayForSortAcsDesc = [1,2,3,4,5];
console.log("13. : ", sortAscDesc(arrayForSortAcsDesc));

function sortAscDesc(sArray)
{
    let sortedArrayEven = [];
    for( let i=0 ; i< sArray.length ; i++)
    {
        if (sArray[i] % 2 === 0)
        {
            sortedArrayEven.push(sArray[i]);
        }
    }
    sortedArrayEven = sortedArrayEven.sort((a, b) => a - b);
    
    let sortedArrayOdd = [];
    for( let i=0 ; i< sArray.length ; i++)
    { 
        
        if (sArray[i] % 2 !== 0)
        {
            sortedArrayOdd.push(sArray[i]);
        }
    }
     sortedArrayOdd = sortedArrayOdd.sort((a, b) => b - a);
     let sArrayFinal = sortedArrayEven.concat(sortedArrayOdd);
     return sArrayFinal;
}
/**
 * 14.O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
 */


let arrayForBinarySearch = [2,3,4,5,6,6,8,8];


console.log(binarySearch(arrayForBinarySearch, 1));   

function binarySearch(arrayForBinarySearch, value)
{
    var firstIndex  = 0,
        lastIndex   = arrayForBinarySearch.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(arrayForBinarySearch[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < arrayForBinarySearch[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > arrayForBinarySearch[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (arrayForBinarySearch[middleIndex] != value) ? false : true;
}




/**
 * 15.O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")
 */

function countBinarySearch(arrayForBinarySearch, value) {
    let high = array.length - 1;
    let low = 0;
    let counter =0;

    if (value < array[low] || value > array[high]) 
        counter++;
        return counter;

    while (high >= low) {
        let mid = (high + low) >> 1;
        counter++;
        if (value === array[mid])
        {
            counter++;
           
        }
            
        else if (value < array[mid]){
            high = mid - 1;
            counter++;}
        else
        {
            low = mid + 1;
            counter++
        }
            
    }

    return counter;
}