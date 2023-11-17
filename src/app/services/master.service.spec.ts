import { MasterService } from "./master.service";

import { ValueService } from "./value.service";

import { ValueServiceFake } from "./value.service.fake";

describe('',()=>{
  it('its first try test',()=>{
    let valueService = new ValueService;
    let masterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('Ronaldo');
  })
  it('its second try test',()=>{
    let valueServiceFake = new ValueServiceFake;
    let masterService = new MasterService(valueServiceFake as unknown as ValueService);
    expect(masterService.getValue()).toBe('Ronaldo');
  })
  it('its third try test',()=>{
    let valueServiceFake = {getValue : ()=>'Ronaldo fake'};
    let masterService = new MasterService(valueServiceFake as ValueService);
    expect(masterService.getValue()).toBe('Ronaldo fake');
  })
  it('its four try test',()=>{
    let valueServiceSpy = jasmine.createSpyObj('ValueService',['getValue']);
    valueServiceSpy.getValue.and.returnValue('Ronaldo fake spy');
    let masterService = new MasterService(valueServiceSpy);
    expect(masterService.getValue()).toBe('Ronaldo fake spy');
  })
  it('its five try test',()=>{
    let valueServiceSpy = jasmine.createSpyObj('ValueService',['getValue']);
    let masterService = new MasterService(valueServiceSpy);
    masterService.getValue();
    expect(valueServiceSpy.getValue).toHaveBeenCalled();
  })
  it('its six try test',()=>{
    let valueServiceSpy = jasmine.createSpyObj('ValueService',['getValue']);
    let masterService = new MasterService(valueServiceSpy);
    masterService.getValue();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  })
})