#include <stdio.h>
#include <stdlib.h>

int main()
{
	int rows = 3;	// Number of sub-arrays
	int *arr[rows]; // Array of integer pointers

	// Allocating different sizes for each row
	arr[0] = malloc(sizeof(int) * 2); // First row: 2 elements
	arr[1] = malloc(sizeof(int) * 3); // Second row: 4 elements
	arr[2] = malloc(sizeof(int) * 4); // Third row: 3 elements

	// Assigning values
	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < (i + 2); j++)
		{
			arr[i][j] = (i + 1) * 10 + j;
		}
	}

	// Printing values
	for (int i = 0; i < rows; i++)
	{
		printf("Row %d: ", i);
		for (int j = 0; j < (i + 2); j++)
		{
			printf("%d ", arr[i][j]);
		}
		printf("\n");
	}

	// Freeing allocated memory
	for (int i = 0; i < rows; i++)
	{
		free(arr[i]);
	}

	return 0;
}