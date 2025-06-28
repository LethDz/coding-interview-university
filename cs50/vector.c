#include <stdio.h>
#include <stdlib.h>

// Vector structure definition
// This structure represents a dynamic array (vector) of integers.
// It contains a pointer to the array of integers and a size field to keep track of the number of elements.
// The vector can be resized dynamically, allowing for efficient memory management and manipulation of the array.
// The vector structure is used to implement a dynamic array that can grow or shrink in size as needed.
// It is a common data structure used in many programming languages to handle collections of items.
typedef struct
{
	int *data;		 // Pointer to the array of integers
	size_t size;	 // Number of elements in the vector
	size_t capacity; // Total capacity of the vector (allocated size)
} Vector;

void vector_init(unsigned int initial_capacity, Vector *vector)
{
	vector->data = malloc(initial_capacity * sizeof(int)); // Allocate memory for the vector
	if (vector->data == NULL)
	{
		printf("Memory allocation failed\n");
		exit(EXIT_FAILURE); // Exit if memory allocation fails
	}

	vector->size = 0;					 // Initialize size to 0
	vector->capacity = initial_capacity; // Set the initial capacity
}

int size(const Vector *vector)
{
	return vector->size; // Return the current size of the vector
}

int capacity(const Vector *vector)
{
	return vector->capacity; // Return the current capacity of the vector
}

int vector_is_empty(const Vector *vector)
{
	return vector->size == 0; // Return true if the vector is empty, false otherwise
}

void vector_resize(Vector *vector)
{
	if (vector->size >= vector->capacity)
	{
		// Resize the vector if it is full
		size_t new_capacity = vector->capacity * 2;						   // Double the capacity
		int *new_data = realloc(vector->data, new_capacity * sizeof(int)); // Reallocate memory
		if (new_data == NULL)
		{
			printf("Memory reallocation failed\n");
			exit(EXIT_FAILURE); // Exit if reallocation fails
		}
		vector->data = new_data;		 // Update the data pointer
		vector->capacity = new_capacity; // Update the capacity
	}
}

void vector_free(Vector *vector)
{
	free(vector->data);	  // Free the allocated memory for the vector
	vector->data = NULL;  // Set pointer to NULL to avoid dangling pointer
	vector->size = 0;	  // Reset size
	vector->capacity = 0; // Reset capacity
}

void vector_add(Vector *vector, int value)
{
	vector_resize(vector);				  // Ensure there is enough capacity
	vector->data[vector->size++] = value; // Add the new value and increment size
}

void vector_prepend(Vector *vector, int value)
{
	vector_resize(vector);
	int *pointer = vector->data;
	for (size_t i = vector->size; i > 0; i--)
	{
		*(pointer + i) = *(pointer + i - 1); // Shift elements to the right
	}

	*(pointer) = value;
	vector->size++; // Increase the size of the vector
	pointer = NULL; // Set pointer to NULL to avoid dangling pointer
}

int vector_pop(Vector *vector)
{
	if (vector->size == 0)
	{
		printf("Vector is empty, cannot pop\n");
		return 0; // Exit if the vector is empty
	}

	int *pointer = vector->data;
	int value = *(pointer + vector->size - 1); // Get the last element
	*(pointer + vector->size - 1) = 0;
	vector->size--; // Decrease the size of the vector
	return value;
}
int vector_remove_value(Vector *vector, int value)
{
	if (vector->size == 0)
	{
		printf("Vector is empty, cannot remove\n");
		return 0; // Exit if the vector is empty
	}

	int *pointer = vector->data;
	int result = 0;
	for (size_t i = 0; i < vector->size; i++)
	{
		if (*(pointer + i) == value)
		{
			for (size_t j = i; j < vector->size - 1; j++)
			{
				*(pointer + j) = *(pointer + j + 1); // Shift elements to the left
			}
			vector->size--; // Decrease the size of the vector
			result = 1;		// Return success
		}
	}

	pointer = NULL; // Set pointer to NULL to avoid dangling pointer
	return result;	// Return failure if value not found
}

int vector_contains(const Vector *vector, int value)
{
	for (size_t i = 0; i < vector->size; i++)
	{
		if (vector->data[i] == value)
		{
			return i; // Return true if the value is found
		}
	}
	return -1; // Return false if the value is not found
}

int vector_get(const Vector *vector, size_t index)
{
	if (index >= vector->size)
	{
		printf("Index out of bounds\n");
		return EXIT_FAILURE;
	}

	return vector->data[index]; // Return the value at the specified index
}

int vector_size(const Vector *vector)
{
	return vector->size; // Return the current size of the vector
}

void vector_print(const Vector *vector)
{
	int *pointer = vector->data; // Pointer to the data array
	for (size_t i = 0; i < vector->size; i++)
	{
		printf("%d ", *(pointer + i)); // Print each element in the vector
	}
	pointer = NULL; // Set pointer to NULL to avoid dangling pointer
	printf("\n");
}

void vector_remove(Vector *vector, size_t index)
{
	if (index >= vector->size)
	{
		printf("Index out of bounds\n");
		return; // Exit if index is out of bounds
	}

	for (size_t i = index; i < vector->size - 1; i++)
	{
		vector->data[i] = vector->data[i + 1]; // Shift elements to the left
	}
	vector->size--; // Decrease the size of the vector
}

void vector_insert(Vector *vector, size_t index, int value)
{
	if (index > vector->size)
	{
		printf("Index out of bounds\n");
		return; // Exit if index is out of bounds
	}

	vector_resize(vector); // Ensure there is enough capacity

	for (size_t i = vector->size; i > index; i--)
	{
		vector->data[i] = vector->data[i - 1]; // Shift elements to the right
	}
	vector->data[index] = value; // Insert the new value at the specified index
	vector->size++;				 // Increase the size of the vector
}

int main(int argc, char *argv[])
{
	Vector vector;
	vector_init(4, &vector); // Initialize the vector with an initial capacity of 4

	// Add some elements to the vector
	vector_add(&vector, 10);
	vector_add(&vector, 20);
	vector_add(&vector, 30);
	vector_add(&vector, 40);

	// Print the vector
	printf("Vector after adding elements: ");
	vector_print(&vector);

	// Insert an element at index 2
	vector_insert(&vector, 2, 25);
	printf("Vector after inserting 25 at index 2: ");
	vector_print(&vector);

	// Remove the element at index 1
	vector_remove(&vector, 1);
	printf("Vector after removing element at index 1: ");
	vector_print(&vector);

	// Get the value at index 2
	int value = vector_get(&vector, 2);
	printf("Value at index 2: %d\n", value);

	int vector_capacity = capacity(&vector);
	printf("Vector Capacity: %d\n", vector_capacity);
	printf("Vector size before prepend: ");
	vector_print(&vector);
	vector_prepend(&vector, 100);
	printf("Vector size after prepend: ");
	vector_print(&vector);
	int size = vector_size(&vector);

	printf("Vector size before freeing: %d\n", size);
	printf("Is vector empty? %s\n", vector_is_empty(&vector) ? "Yes" : "No");
	vector_pop(&vector);
	printf("Vector size after pop: %d\n", vector_size(&vector));
	printf("Vector elements after pop: ");
	vector_print(&vector);
	vector_remove_value(&vector, 30);
	printf("Vector elements after removing 30: ");
	vector_print(&vector);
	printf("Vector elements find 10: ");
	int index = vector_contains(&vector, 10);
	if (index != -1)
	{
		printf("Found 10 at index %d\n", index);
	}
	else
	{
		printf("10 not found in the vector\n");
	}
	// Free the vector memory
	vector_free(&vector);

	return EXIT_SUCCESS;
}
