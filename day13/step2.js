const carArray = [];
const timeArray = [];

function entrance(){// F start
    // 1. 입력
    const entCar = document.querySelector("#inCar").value;
    const entTime = document.querySelector("#inTime").value;
    console.log (entCar);
    console.log (entTime);
    // 2. 처리
    if (entCar.length != 4 || (isNaN(entCar[0]) || isNaN(entCar[1]) || isNaN(entCar[2]) || isNaN(entCar[3]))) { 
        alert('차량번호는 4자리 숫자로 입력해주세요.');
        document.querySelector("#inCar").value=''; 
        document.querySelector("#inTime").value='';return;
    }
    if(entTime===''){alert('입차 시간을 입력해주세요');return;}
    carArray.push(entCar);
    timeArray.push(entTime);
    console.log(carArray);
    console.log(timeArray);
    // 3. 출력
        alert('입차 완료')
}// F end

function exit(){// F start
    // 1. 입력
    const exitCar = document.querySelector("#outCar").value;
    const exitTime = document.querySelector("#outTime").value;
    console.log (exitCar);
    console.log (exitTime);
    // 2. 처리
    let cost = 0;
    //=======================입차=======================
    const carIndex = carArray.indexOf(exitCar)
    if(carIndex== -1){alert('입차한 차량이 없습니다.');return;}

    const inTime =timeArray[carIndex];
        console.log(inTime);
    const inMtime = (inTime.split(":")[0]*60)+Number(inTime.split(":")[1]);
        console.log(inMtime);
    //=======================출차==========================
    const outMtime =(exitTime.split(":")[0]*60)+Number(exitTime.split(":")[1]);
        console.log(outMtime);
    //=======================시간차이======================
    // 3. 출력
    const time = outMtime-inMtime ; console.log('시간차이:'+time)
    if(time<0){alert('출차시간이 더적을수 없습니다')}
    else if(time<=30){cost=0;}
    else if(time>30){cost= parseInt((time-30)/ 10)*1000;}
    if (exitCar.length != 4 || (isNaN(exitCar[0]) || isNaN(exitCar[1]) || isNaN(exitCar[2]) || isNaN(exitCar[3]))) { 
        alert('차량번호는 4자리 숫자로 입력해주세요.'); return;
    }
    if(exitTime===''){alert('출차 시간을 입력해주세요');return;}
    
        alert(`출차 완료: ${cost}원`);
}// F end

 /*  const outArray = exitTime.split(":"); console.log(outArray);
    const outH =outArray[0]; console.log(outH);
    const outM =outArray[1]; console.log(outM);
    const outMtime = (outH*60)+(outM*1);    console.log(outMtime); */