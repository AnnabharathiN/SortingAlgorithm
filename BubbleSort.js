/*Bubble Sort
There are many many sorting algorithms available to a programmer: insertion sort, bubble sort, merge sort,
 heap sort, quick sort, etc. For a cool animation of sorting, follow this link.

Bubble sort it's one of the easiest to learn at the beginning, so we're going to focus on this one.
 The main idea of a bubble sort algorithm is to sort an array using bubbles of elements. How it does do that? Its underlying mechanism can be summarised as follows:



While the array is not sorted, the code would do the following steps:

Take each pair of 2 adjacent numbers and compare them.
If their order is not correct, switch them.
The very important step is to keep in mind that these steps are repeated over and over until the array gets to its final sorted state.

Let's take an example and show how the steps are applied to a specific array. Given is the following array and we need to sort it in ascending order: 5 1 9 4 3 7

Take the first pair of numbers and compare them (5 and 1).
Here, 5 > 1, so we switch them, getting the following array 1 5 9 4 3 7
Move to the next pair of numbers and compare them: 5 and 9 (take care that we are using the modified array)
In this case, 5 < 9; their order is ok and we move further.
The next pair is 9 and 4. Comparing them, we see that 9 > 4, so we switch and get 1 5 4 9 3 7
Moving further, we have 9 and 3. Again, their order is not correct and they are interchanged 1 5 4 3 9 7
The last pair in this round is 9 and 7. We see that again, 9 > 7, and switching them gives the array 1 5 4 3 7 9
Observe that at the end of this list of steps, the array is not yet sorted (not all of it), so we have to go again 
and apply the same techniques until it reaches this point 1 3 4 5 7 9

Algorithm:
Step1: Create a funtion bubbleSort with the parameter arr.
Step2: Use for loop with i initialized to 0, checks if i is less than length of the array and increment by every iteration.
Step4: Use another for loop with j, initialize value 0, checks if j is less than length of the array -1 and increment by every iteration.
Step5: Now check the array value which is greater in th j for loop.
Step6: Use local temp variable to sort.
Step7: console.log the arr to display the sorted output.
Step8: Call the function to execute it.
*/

function bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
       { for(let j=0; j<arr.length-1;j++)
       {
        if(arr[j]>arr[j+1])
           { 
            let temp=arr[j+1];
            arr[j+1]= arr[j];
            arr[j]=temp;
           }  
       }
       }
       console.log(arr);

}
bubbleSort([9,5,7,2,1,4,8,6,3])