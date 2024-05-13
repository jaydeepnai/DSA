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
        bool overlap = DoesOverlap(intervals[i],intervals[i+1]);
        if(overlap){
            Interval temp;
            temp.start = min(intervals[i].start,intervals[i+1].start);
            temp.end =  max(intervals[i].end,intervals[i+1].end);
            resultInterval.push_back(temp);
        }
        else{
            resultInterval.push_back(intervals[i]);
        }
    }
    // resultInterval = intervals;
    return resultInterval;
}

int main(){
    vector<Interval> Intervals;
    Interval newInterval;
    vector<Interval> resultInterval;
    
    newInterval.start = 1;
    newInterval.end = 2;
    Intervals.push_back(newInterval);
    newInterval.start = 3;
    newInterval.end = 7;
    Intervals.push_back(newInterval);
    newInterval.start = 8;
    newInterval.end = 12;
    Intervals.push_back(newInterval);
    newInterval.start = 10;
    newInterval.end = 11;
    Intervals.push_back(newInterval);
    newInterval.start = 6;
    newInterval.end = 9;
    Intervals.push_back(newInterval);
    newInterval.start = 14;
    newInterval.end = 16;
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