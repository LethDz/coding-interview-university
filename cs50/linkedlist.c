#include <stdlib.h>
#include <stdio.h>

typedef struct Node Node;

struct Node
{
	int data;
	Node *next;
};

Node *newNode(int data)
{
	Node *node = malloc(sizeof(Node));
	if (node == NULL)
	{
		printf("Memory allocation failed\n");
		exit(EXIT_FAILURE); // Exit if memory allocation fails
	}
	node->data = data; // Set the data for the new node
	return node;	   // Return the newly created node
}

void *addNode(int data, Node *head)
{
	Node *node = newNode(data); // Create a new node with the given data
	Node *current = head;
	if (node == NULL)
	{
		printf("Failed to create a new node\n");
		exit(EXIT_FAILURE); // Exit if memory allocation fails
	}

	do
	{
		if (current->next == NULL)
		{
			current->next = node;
			current = NULL;
			node = NULL;
		}
		else
		{
			current = current->next;
		}
	} while (current != NULL);
}

void removeNode(int data, Node *head)
{
	Node *current = head; // Start from the head of the list
	Node *previous = NULL;
	while (current != NULL)
	{
		if (current->data == data)
		{
			if (previous == NULL)
			{
				Node *temp;
				temp = current->next;
				free(current);
				current = NULL;
				head = NULL;
			}
			else
			{
				previous->next = current->next;
				free(current);
				current = NULL;
			}
		}
		else
		{
			previous = current;
			current = current->next;
		}
	}
}

void printLinkedNode(Node *head)
{
	Node *current = head;
	while (current != NULL)
	{
		printf("%d", current->data);
		current = current->next;
	}

	current = NULL;
}

int count(Node *head)
{
	int count = 0;
	Node *current = head;

	while (current != NULL)
	{
		count++;
		current = current->next;
	}

	return count;
}

int empty(Node *head)
{
	if (head == NULL)
	{
		return 1;
	}

	return 0;
}

int valueAt(int index, Node *head)
{
	int tempIndex = 0;
	Node *current = head;
	while (current != NULL)
	{
		if (tempIndex == index)
		{
			current = NULL;
			return current->data;
		}
		current = current->next;
	}

	return -1;
}

Node *pushFront(int data, Node *head)
{
	if (head == NULL)
	{
		printf("Invalid operation");
		exit(EXIT_FAILURE);
	}

	Node *node = newNode(data);
	node->next = head;
	return node;
}

Node *popFront(Node *head)
{
	Node *newHead = head->next;
	free(head);
	head = NULL;
	return newHead;
}

Node *popEnd(Node *head)
{
	Node *current = head;
	Node *previous = NULL;
	while (current != NULL)
	{
		if (current->next == NULL)
		{
			if (previous != NULL)
			{
				previous->next = NULL;
				return current;
			}

			return current;
		}

		current = current->next;
	}

	return NULL;
}

Node *front(Node *head)
{
	return head;
}

Node *end(Node *head)
{
	if (head == NULL)
	{
		return NULL;
	}

	if (head->next == NULL)
	{
		return head;
	}
	return end(head->next);
}

Node *reverse(Node *head)
{
	Node *current = head;
	Node *next;
	Node *prev;

	while (current != NULL)
	{
		next = current->next;
		current->next = prev;
		prev = current;
		current = next;
	}

	return prev;
}

int main(void)
{
	Node *head = newNode(1);
	addNode(2, head);
	addNode(3, head);
	addNode(4, head);
	printLinkedNode(head);
	removeNode(3, head);
	printf("\n");
	printLinkedNode(head);
	head = reverse(head);
	printLinkedNode(head);

	return EXIT_SUCCESS;
}