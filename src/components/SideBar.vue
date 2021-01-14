<template>
  <a-layout-sider
    class="site-layout-background"
    id="sidebar"
    style="margin-top:50px;"
  >
    <a-menu mode="inline" style="height: 80%; border-right: 0;">
      <a-menu-item><h2 style="cursor:default;">Fields</h2></a-menu-item>
      <draggable
        class="dragArea list-group"
        :list="list"
        :group="{ name: 'people', pull: 'clone', put: false }"
        item-key="name"
        :key="list.length"
      >
        <template #item="{ element }">
          <div>
            <a-menu-item :key="element.key"
              ><a-button :id="element.name === 'Text' ? 'text-btn' : ''">{{
                element.name
              }}</a-button></a-menu-item
            >
          </div>
        </template>
      </draggable>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "SideBar",
  components: {
    draggable
  },
  data() {
    return {
      current: ["none"],
      list: [
        { name: "Dropdown", key: 2 },
        { name: "Text", key: 3 },
        { name: "Checkbox", key: 4 }
      ]
    };
  }
};
</script>

<style>
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: white;
}

.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
  border-right: none;
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  width: 100%;
}

#text-btn {
  width: 97.6px;
}
</style>
