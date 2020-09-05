#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
int main() {
    // while (1) {
    //     printf("%d", rand());
    //     sleep(3);
    //     system("@cls||clear");
    // }
    char addr[] = {'1', '2', '3', '4', '\0'};
    printf("%s", addr);
    // printf("09");
    getchar();
    return 0;
}