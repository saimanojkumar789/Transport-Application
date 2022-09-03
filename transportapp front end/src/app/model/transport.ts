export interface Transport{
    request_time: any;
    source: any;
    acknowledgements:any;
    routes:{ //square 
       
        duration: any;  
       
        route_parts:{ //square 
            mode: any,
            from_point_name: any;
            from_point: any;
            to_point_name: any;
            to_point: any;
            destination: any;
            destination_point: any;
             
            line_name: any;
            duration: any;
            departure_time: any;
            arrival_time: any;
            departure_datetime:any;
            arrival_datetime: any;
            coordinates: any[];
             
            
            distance: any;
            distance_desc: any;
          }[];
}[];
}