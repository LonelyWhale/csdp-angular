export class EcsOrder {
  constructor(
    public name: string,
    public time: string,
    public project: string,
    public vdc: string,
    public area: string,
    public subNetwork: string,
    public subNetworkIp: string,
    public cpu: string,
    public memory: string
  ) { }
}
