import OfflineFirstAPI from 'react-native-offline-api';
 
// ... API and services configurations
 



const API_OPTIONS = {
    domains: { default: 'https://erc-routine-project.firebaseio.com' },
   
    debugAPI: true,
    printNetworkRequests: true
};

const API_SERVICES = {
  'class-schedules': {
    path: 'class-schedules/:faculty/:year.json',
  },
   'exam-schedules': {
    path: 'exam-schedules/:faculty/:year.json',
  },
};


const api = new OfflineFirstAPI(API_OPTIONS, API_SERVICES);
export async function fetchSchedules(data,callback){
    console.log('inside fetch');
 	try {
            const request = await api.fetch(
                'class-schedules',
                {
                    pathParameters: { faculty: data.department,year:data.year }
                }
            );
            console.log('request is ',request);
            let dat = process(request);
          callback(dat);
        } catch (err) {
            // Handle any error
            console.log(err);
            callback({type:'error',data:err});
        }
    };

//function for exam 
export async function fetchExamSchedules(data,callback){
    console.log('inside fetch');
    try {
            const request = await api.fetch(
                'exam-schedules',
                {
                    pathParameters: { faculty: data.department,year:data.year }
                }
            );
            console.log('request is ',request);
            let dat = processExam(request);
          callback(dat);
        } catch (err) {
            // Handle any error
            console.log(err);
            callback({type:'error',data:err});
        }
    };



 function process(request){
    // console.log(request);
        let xx = {};
        try{
            let keys = Object.keys(request);
            let datay = [];
            keys.map((l,i)=>{
                xx[l] = [] ;
                if(l=='version'){
                    return;
                }
                Object.keys(request[l]).map((da,i)=>{
                    (xx[l]).push({time:da,class:(request[l])[da]});
                });
                
            });
            let tt = {};
            tt.data = xx;
            tt.type='success';
            console.log(tt);
            return tt;
        } catch (err) {
            // Handle any error
            console.log('error ',err);
            return ({type:'error',data:err});
        }
    }

function processExam(request){
    // console.log(request);
        let xx = [];
        try{
            let keys = Object.keys(request);
                keys.map((l,i)=>{
                xx[l] = [] ;
                if(l=='version'){
                    return;
                }
                xx.push({from:l,subject:(request[l])});
                
                
            });
            let tt = {};
            tt.data = xx;
            tt.type='success';
            console.log(tt);
            return tt;
        } catch (err) {
            // Handle any error
            console.log('error ',err);
            return ({type:'error',data:err});
        }
    }


