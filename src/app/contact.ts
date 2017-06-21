export class Contact {
  private name: string;
  private email: string;
  public phoneNumber: string;
  public image: string;

  constructor(contactName: string, contactEmail: string, contactPN: string, contactImage: string){
    this.name = contactName;
    this.email = contactEmail;
    this.phoneNumber = contactPN;
    this.image = contactImage;
  }

  public getName(): string {
    return this.name;
  }

	public setName(newName: string): void{
		this.name = newName;
	}

  public getEmail(): string {
    return this.email;
  }

	public setEmail(newEmail: string): void{
		this.email = newEmail;
	}

  public blankContact(): void{
    this.name = "lalalalal";
    this.email = "";
    this.phoneNumber = "";
    this.image = "";
  }

}
