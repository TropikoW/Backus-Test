import { ValueService } from "./value.service";

describe('This test is for the value service',()=>{
  let service = new ValueService;
  let pastValue;
  let newValue;

  beforeEach(()=>{
    service = new ValueService;
  })

  describe('Test for load',()=>{
    it('It should return true',()=>{
      expect(service).toBeTruthy();
    })
  })
  describe('It for getValue',()=>{
    it('It should return a string #Ronaldo',()=>{
      expect(service.getValue()).toBe('Ronaldo');
    })
    it('It should return a string #Ronaldo',()=>{ 
      pastValue = service.getValue();
      newValue = service.getValue();
      expect(newValue).toEqual(pastValue)
    })
  })

  describe('It for setValue',()=>{
    it('It should return the value that has the parameter',()=>{
      expect(service.setValue('Cristian')).toBe('Cristian');
    })
    it('It should return the value that has the parameter',()=>{
      pastValue = service.setValue('Cristian');
      newValue = service.setValue('Cristian');
      expect(pastValue).toBe(newValue);
    })
  })

  describe('It for getPromise',()=>{
    it('It should receive the value that send the promise',()=>{
      service.getPromise()
      .then((obj)=>{
        pastValue = obj;
        newValue = obj;
        expect(pastValue).toEqual(newValue);
      })
    })
    it('It should load the async directly',async()=>{
      let answer = await service.getPromise();
      pastValue = await service.getPromise();
      expect(answer).toEqual(pastValue);
    })
  })

  describe('It for getObservable',()=>{
    it('It should return the value that has the observable',()=>{
      service.getObservable().subscribe((value)=>{
        pastValue = value;
        newValue = value;
        expect(pastValue).toEqual(newValue);
      })
    })
  })
})