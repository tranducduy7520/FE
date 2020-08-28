#include<iostream>
#include<fstream>
#include<algorithm>
#include<vector>
using namespace std;

struct TrainType{
            float departureTime;
            float arrivalTime;
            string trainName;
            string stationName;
};
vector<TrainType> train;

// Comparative Condition
bool CmpW1(const TrainType &a, const TrainType &b) {
            return a.departureTime < b.departureTime;
    }
// Comparative Condition
bool CmpW2(const TrainType &a, const TrainType &b) {
            return a.arrivalTime < b.arrivalTime;
    }


int main() {
    
    // Read File
    ifstream file;
	file.open("./data.txt", ios::in);
    TrainType temp;
    while(!file.eof()) {
        file >> temp.departureTime;
        file >> temp.arrivalTime;
        file >> temp.trainName;
        file >> temp.stationName;
        train.push_back(temp);
    }
	file.close();
    
    
    int input;
    float time;
    cout << "Tim kiem theo:" << endl << "1. Gio khoi hanh" << endl << "2. Gio den" << endl;
    cin >> input;
    if (input == 1) {
        // Sort by departureTime
        sort(train.begin(),train.end(),CmpW1);
        cout << "Nhap gio khoi hanh: ";
        cin >> time;
        // Binary Search
        int lower = 0, upper = train.size() - 1, mid;
        while (lower <= upper){
            mid = (upper + lower) / 2;
            if(train[mid].departureTime > time) upper = mid - 1;
                else if(train[mid].departureTime < time) lower = mid+1;
                    else {
                        cout << train[mid].departureTime << " "<< train[mid].arrivalTime << " " << 
                        train[mid].trainName << " " << train[mid].stationName << endl;
                        return 0;
                    }
        }
    }
    else {
        // Sort by arrivalTime
        sort(train.begin(),train.end(),CmpW2);
        cout << "Nhap gio den: ";
        cin >> time;
        // Binary Search
        int lower = 0, upper = train.size() - 1, mid;
        while (lower <= upper){
            mid = (upper + lower) / 2;
            if(train[mid].arrivalTime > time) upper = mid - 1;
                else if(train[mid].arrivalTime < time) lower = mid+1;
                    else {
                        cout << train[mid].departureTime << " "<< train[mid].arrivalTime << " " << 
                        train[mid].trainName << " " << train[mid].stationName << endl;
                        return 0;
                    }
        }
    }
}
