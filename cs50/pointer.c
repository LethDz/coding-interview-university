#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main()
{
	int arr[] = {10, 20, 30, 40, 50};
	int *ptr = arr; // Points to the first element of the array

	char source[] = "Hello, world!";
	char *dest = source; // Points to the first character of the string
	printf("Array elements using pointer:\n");
	// Print elements of the array using pointer arithmetic
	for (int i = 0; *(dest + i) != '\0'; i++)
	{
		if (islower(*(dest + i)))
		{
			*(dest + i) = toupper(*(dest + i)); // Convert to uppercase
		}
		printf("Element %d: %c (Address: %p)\n", i, *(dest + i), (dest + i));
	}

	for (int i = 0; i < 5; i++)
	{
		printf("Element %d: %d (Address: %p)\n", i, *(ptr + i), (ptr + i));
	}

	return 0;
}