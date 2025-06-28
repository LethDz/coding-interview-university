#include <stdio.h>

const int TOTAL = 3;

// Function prototype
float average(int scores[], int count);

int main(int argc, char const *argv[])
{
    /* code */
    int scores[] = {72, 73, 33};

    printf("Average: %.2f\n", average(scores, TOTAL));
    return 0;
}

float average(int scores[], int count)
{
    int sum = 0;
    for (int i = 0; i < count; i++)
    {
        sum += scores[i];
    }
    return (float)sum / count;
}
