/*Selection Sort
how does it work: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

Now go through the rest of the array (excluding the first element) find the index of the lowest and swap it with the second element.

That is how it continues to select (find out) the lowest element of the array and put it on the left until it hits the last element.

Algorithm:
Step1: Create a funtion selectionSort with the parameter arr.
Step2: Use for loop with i initialized to 0, checks if i is less than length of the array -1 and increment by every iteration.
Step3: create a variable smallnum and assign it to i.
Step4: Use another for loop with j, initialize value i+1, checks if j is less than length of the array  and increment by every iteration.
Step5: Now check the which array value is smaller in the j for loop, if true assign smallnum as j.
Step6: Now check if smallnum is not equal to i.
Step7: if true, use local temp variable to sort.
Step7: console.log the arr to display the sorted output.
Step8: Call the function to execute it.
*/

function selectionSort(arr)
{
    for(let i=0;i<arr.length-1;i++)
      { 
        let smallnum=i;
        for(let j=i+1; j<arr.length;j++)
       {
        if(arr[j]<arr[smallnum])
           { 
            smallnum=j;
           }
        }
           if(smallnum!==i)
           {
            let temp=arr[i];
            arr[i]= arr[smallnum];
            arr[smallnum]=temp;
           }  
       
       }
       console.log(arr);
}
selectionSort([9,7,8,6,4,5,2,3,1]);