import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { ValueServiceFake } from './value.service.fake';

fdescribe('Test for a dependences services',()=>{
  it('First test with valueservice of dependence',()=>{
    let valueService = new ValueService;
    let masterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('Ronaldo');
  })
  it('Second test with valueservice of dependence',()=>{
    let valueServiceFake = new ValueServiceFake;
    let masterService = new MasterService(valueServiceFake as unknown as ValueService);
    expect(masterService.getValue()).toBe('Ronaldo');
  })
  it('Thirty test with valueservice of dependence',()=>{
    let fake = { getValue :()=> 'Fake from object'};
    let masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('Fake from object');
  })
})