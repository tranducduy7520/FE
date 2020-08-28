#include<iostream>
#include<string>
using namespace std;

template <class T> class Node {
public:
    T Value;
    Node *Next;
    Node(T v) : Value(v), Next(0) {}
};

template <class T> class List {
    Node<T> *head, *tail;
    int count;
public:
    List() : count(0) { }
    ~List();

    void RemoveAll() {
        while(count) {
            --count;

            Node<T> *p = head;
            head = p->Next;
            delete p;
        }
    }
    void Add(T v) {
        Node<T> *p = new Node<T>(v);
        if (count++ == 0) {
            head = p;
        }
        else {
            tail->Next = p;
        }
        tail = p;
    }
    Node<T> *First() const { return head; }
    int Count() const { return count; }
    T* ToArray() {
        T* arr = new T[count];
        Node<T> *p = head;
        for(int i = 0; i < count; i++, p = p->Next){
            arr[i] = p->Value;
        }
        return arr;
    }
class Date {
public:
    int Day, Month, Year;
    Date() { Day = 0; Month = 0; Year = 0; }
    Date(int, int, int);
    friend ostream& operator<<(ostream &, const Date&);
};
class ThiSinh {
public:
    Date NgaySinh;
    string HoTen;
    double Toan, Ly, Anh;
public:
    ThiSinh() {}
    ThiSinh(const char *hoTen, const Date ns, double toan, double ly, double anh);
    double Tong() { return Toan*2 + Ly +Anh; }
    double TB() { return Tong/3; }
    friend ostream& operator<<(ostream &, const ThiSinh&);
};

ostream& operator<<(ostream & out, const Date& d) {
    out << d.Day << "." << d.Month << "." << d.Year;
    return out;
}

ostream& operator<<(ostream & out, const ThiSinh& ts) {
    out << ts.HoTen << ts.Toan << ts.Ly << ts.Anh << ts.Tong() << ts.TB();
    return out;
}

class ListThiSinh : public List<ThiSinh *> {
public:
    ListThiSinh(ThiSinh **arr) {
        int i = 0;
        while (arr[i]){
            this->Add(arr[i++]);
        }
    }
};

int main() {
    ThiSinh *arr[] = {
        new ThiSinh("Nguyen", Date(2020, 1, 15), 8, 7, 8),
        0
    };
    ListThiSinh cacThiSinh(arr);
    auto p = cacThiSinh.First();
    int soLuong = cacThiSinh.Count();
    for(int i=0; i < soLuong; i++, p=p->Next){
        cout << *p->Value <<endl;
    }
    return 0;
}
};
