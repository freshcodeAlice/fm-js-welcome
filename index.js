class Button {
  constructor() {
  }
  createButton() {}
}

class IOSButton extends Button {
  constructor(){}
  createButton() {}
}

class WinButton extends Button {
  constructor(){}
  createButton() {}
}

class UnixButton extends Button {
  constructor(){}
  createButton() {}
}


//////



class UIFactory {
  createButton(){} // створення реальної кнопки
}

class IOSUIFactory extends UIFactory {
  createButton() {
    return new IOSButton();
  }
}


class WinUIFactory extends UIFactory {
  createButton() {
    return new WinUIFactory();
  }
}

class UnixUIFactory extends UIFactory {
  createButton() {
    return new UnixButton();
  }
}

////

class Program {
  render(OS) {
    switch(OS) {
    case 'win': 
    this.uiFactory = new WinUIFactory();
    case 'unix':
    this.uiFactory = new UnixUIFactory();
    case 'mac':
    this.uiFactory = new IOSUIFactory();
    default:
      this.uiFactory = new UIFactory();
    }

  const button = this.uiFactory.createButton();
}

}