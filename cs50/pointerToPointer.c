#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int alloc_str(size_t size, char **str);

int main(void)
{
	char *str = "Hello, World!";
	char *copystr;
	printf("Original address of copyString: %p\n", copystr);
	if (alloc_str(strlen(str), &copystr))
	{
		printf("Memory allocated successfully: %p\n", &copystr);
		strcpy(copystr, str); // Copy the string to the allocated memory
		printf("Original: %s\n", str);
		printf("Copy: %s\n", copystr);
		free(copystr); // Free the allocated memory
	}
	else
	{
		printf("Memory allocation failed\n");
	}
}

int alloc_str(size_t size, char **str)
{
	printf("address for variable **str: %p\n", &(**str));
	printf("address for variable *str: %p\n", &(*str));
	printf("address for variable str: %p\n", &(str));
	char *p = malloc(size + 1); // Allocate memory for the string plus null terminator for \n
	if (p == NULL)
	{
		return 0; // Return 0 if allocation fails
	}
	*str = p;
	printf("address for variable p: %p\n", p);
	printf("address for variable &p: %p\n", &p);
	for (size_t i = 0; i < size + 1; i++)
	{
		printf("address for variable *(p + %zu): %p\n", i, (p + i));
	}
	printf("address for variable **str: %p\n", **str);
	printf("address for variable *str: %p\n", *str);
	printf("address for variable str: %p\n", &(str));
	return 1; // Return 1 on success
}