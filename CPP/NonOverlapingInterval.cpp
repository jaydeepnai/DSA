//It should return a interval that is non-overlapped, not by the privious nor next 

#include<bits/stdc++.h>
using namespace std;

struct Interval{
    int start;
    int end;
    Interval():start(0),end(0){};
};

bool DoesOverlap(Interval a, Interval b){
    return min(a.end,b.end)>=max(a.start,b.start);
}

vector<Interval> mergedIntervals (vector<Interval> intervals){
    vector<Interval> resultInterval;
    sort(intervals.begin(),intervals.end(),[](Interval a, Interval b){
        return a.start < b.start ;
    });
    cout<<"sorted" <<endl;
    for (int i = 0; i < intervals.size(); i++) {
        cout << intervals[i].start<< " ";
        cout << intervals[i].end<<endl;
    }
    for (int i = 0; i < intervals.size(); i++) {
        bool nextIntervalOverlap = DoesOverlap(intervals[i],intervals[i+1]);
        bool previousIntervalOverlap = DoesOverlap(intervals[i],intervals[i-1]);
        if(previousIntervalOverlap== false && nextIntervalOverlap == false && i != 0){
            cout << "non Overlap interval { " << intervals[i].start << ", " << intervals[i].end << " }" << endl;
        }
    }
    return resultInterval;
}

int main(){
    vector<Interval> Intervals;
    Interval newInterval;
    vector<Interval> resultInterval;
    
    newInterval.start = 1;
    newInterval.end = 3;
    Intervals.push_back(newInterval);
    newInterval.start = 2;
    newInterval.end = 4;
    Intervals.push_back(newInterval);
    newInterval.start = 3;
    newInterval.end = 5;
    Intervals.push_back(newInterval);
    newInterval.start = 7;
    newInterval.end = 9;
    Intervals.push_back(newInterval);
    
    
    cout<<"OG Intervals : "<<endl;
    for (int i = 0; i < Intervals.size(); i++) {
        cout << Intervals[i].start<< " ";
        cout << Intervals[i].end<<endl;
    }
    resultInterval = mergedIntervals(Intervals);
    cout<<"resultInterval : "<<endl;
    for (int i = 0; i < resultInterval.size(); i++) {
        cout << resultInterval[i].start<< " ";
        cout << resultInterval[i].end<<endl;
    }
    
}