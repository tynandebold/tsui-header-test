export const styles = `
  .ts-headerbar {
    -webkit-transition: opacity .2s;
    background-color: #fff;
    position: relative;
    transition: opacity .2s;
  }

  ol[class], ul[class] {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul:last-child {
    margin-bottom: 0;
  }

  .ts-toolbar {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 60px;
    max-height: 60px;
    min-height: 60px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ts-toolbar-menu {
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .ts-toolbar-item {
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    padding: 10px 5px;
  }

  .ts-toolbar-icon {
    padding-left: 10px;
    padding-right: 10px;
  }

  .ts-toolbar-title {
    padding-left: 0;
    padding-right: 0;
    text-overflow: ellipsis;
  }

  .ts-toolbar-title label {
    font-size: 18px;
    padding: 10px;
    padding-left: 0;
    line-height: 20px;
    display: block;
    position: relative;
    top: -2px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ts-toolbar-menu.ts-right .ts-toolbar-item:last-child {
    padding-right: 10px;
  }
`;