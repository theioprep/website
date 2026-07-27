/* @ds-bundle: {"format":4,"namespace":"TheIOPrepDesignSystem_433c05","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CourseGrid","sourcePath":"ui_kits/marketing/CourseGrid.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a9b3a4f05dba","components/core/Button.jsx":"bca07c54081c","components/core/Card.jsx":"6b887589500c","components/feedback/Dialog.jsx":"5e2f165eb2c3","components/feedback/Toast.jsx":"e210f40fc8d4","components/feedback/Tooltip.jsx":"2e8f6944aa74","components/forms/Checkbox.jsx":"adc086cbc0dc","components/forms/Input.jsx":"a5d7aa8cdf9c","components/forms/Radio.jsx":"8b4678d78230","components/forms/Select.jsx":"eca5090bdca8","components/forms/Switch.jsx":"2fb62958685d","components/navigation/Tabs.jsx":"b6bbf12cc3a6","ui_kits/checkout/CheckoutForm.jsx":"c9fee59070a3","ui_kits/checkout/PricingCard.jsx":"abf1a7e0f375","ui_kits/dashboard/LessonTabs.jsx":"0353ee2d9f7d","ui_kits/dashboard/Sidebar.jsx":"0829356deddc","ui_kits/dashboard/VideoPlayer.jsx":"ac3b00494242","ui_kits/marketing/CourseGrid.jsx":"a7ead75b11a1","ui_kits/marketing/Footer.jsx":"ab538543711d","ui_kits/marketing/Hero.jsx":"fc18846671b6","ui_kits/marketing/MarketingHeader.jsx":"3544d96c220c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheIOPrepDesignSystem_433c05 = window.TheIOPrepDesignSystem_433c05 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'blue',
  children
}) {
  const tones = {
    blue: {
      background: 'var(--oxford-blue-050)',
      color: 'var(--oxford-blue)',
      border: '1px solid var(--oxford-blue-100)'
    },
    gold: {
      background: 'var(--gold-100)',
      color: 'var(--gold-700)',
      border: '1px solid var(--gold-300)'
    },
    success: {
      background: 'var(--success-bg)',
      color: 'var(--success)',
      border: '1px solid var(--success)'
    },
    error: {
      background: 'var(--error-bg)',
      color: 'var(--error)',
      border: '1px solid var(--error)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)',
      color: 'var(--oxford-blue)',
      background: 'var(--gray-050)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, children, onRemove && React.createElement('span', {
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      color: 'var(--gray-500)'
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeMap = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--fs-small)'
  },
  md: {
    padding: '11px 22px',
    fontSize: 'var(--fs-body)'
  },
  lg: {
    padding: '14px 30px',
    fontSize: 'var(--fs-body-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--oxford-blue)',
    color: 'var(--white)',
    border: '1px solid var(--oxford-blue)'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--oxford-blue)',
    border: '1px solid var(--oxford-blue)'
  },
  gold: {
    background: 'var(--gold)',
    color: 'var(--oxford-blue)',
    border: '1px solid var(--gold)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--oxford-blue)',
    border: '1px solid transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  style
}) {
  const v = variants[variant] || variants.primary;
  const s = sizeMap[size] || sizeMap.md;
  return React.createElement('button', {
    onClick: disabled ? undefined : onClick,
    disabled,
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-base) var(--ease-standard),opacity var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      ...v,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padded = true,
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: padded ? 'var(--space-5)' : 0,
      fontFamily: 'var(--font-serif)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,33,71,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      padding: 'var(--space-6)',
      width: 420,
      fontFamily: 'var(--font-serif)',
      border: '1px solid var(--border-hairline)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--oxford-blue)'
    }
  }, title), React.createElement('span', {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--gray-500)',
      fontSize: 20
    }
  }, '\u00d7')), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'blue',
  children
}) {
  const tones = {
    blue: {
      background: 'var(--oxford-blue)',
      color: 'var(--white)'
    },
    success: {
      background: 'var(--success)',
      color: 'var(--white)'
    },
    error: {
      background: 'var(--error)',
      color: 'var(--white)'
    }
  };
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)',
      padding: '12px 18px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-raised)',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--oxford-blue)',
      color: 'var(--white)',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-raised)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--oxford-blue)'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'var(--fs-body)',
  color: 'var(--text-body)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard)',
  width: '100%',
  boxSizing: 'border-box'
};
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)'
    }
  }, label && React.createElement('div', {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--oxford-blue)',
      marginBottom: 6
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    style: {
      ...base,
      borderColor: error ? 'var(--error)' : 'var(--border-hairline)',
      ...style
    }
  }), error && React.createElement('div', {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--error)',
      marginTop: 4
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    checked,
    onChange,
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--oxford-blue)'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)'
    }
  }, label && React.createElement('div', {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--oxford-blue)',
      marginBottom: 6
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '11px 14px',
      width: '100%',
      background: 'var(--white)'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--oxford-blue)' : 'var(--gray-300)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      display: 'inline-block'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--white)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-serif)'
    }
  }, tabs.map((t, i) => React.createElement('div', {
    key: i,
    onClick: () => onChange && onChange(t.value ?? t),
    style: {
      padding: '10px 20px',
      fontSize: 'var(--fs-body)',
      color: active === (t.value ?? t) ? 'var(--oxford-blue)' : 'var(--text-muted)',
      borderBottom: active === (t.value ?? t) ? '2px solid var(--gold)' : '2px solid transparent',
      cursor: 'pointer',
      fontWeight: active === (t.value ?? t) ? 700 : 400
    }
  }, t.label ?? t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/checkout/CheckoutForm.jsx
try { (() => {
function CheckoutForm() {
  const {
    Input,
    Select,
    Checkbox,
    Button
  } = window.TheIOPrepDesignSystem_433c05;
  return React.createElement('div', {
    style: {
      maxWidth: 420,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--oxford-blue)'
    }
  }, 'Checkout'), React.createElement(Input, {
    label: 'Full name',
    placeholder: 'Jane Student'
  }), React.createElement(Input, {
    label: 'Email',
    placeholder: 'you@school.edu'
  }), React.createElement(Select, {
    label: 'Exam board',
    options: ['IGCSE', 'IB']
  }), React.createElement(Input, {
    label: 'Card number',
    placeholder: '4242 4242 4242 4242'
  }), React.createElement(Checkbox, {
    label: 'Send me exam-day reminders',
    checked: true,
    onChange: () => {}
  }), React.createElement(Button, {
    variant: 'primary',
    size: 'lg',
    style: {
      width: '100%'
    }
  }, 'Complete purchase'));
}
window.CheckoutForm = CheckoutForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/checkout/CheckoutForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/checkout/PricingCard.jsx
try { (() => {
function PricingCard({
  plan,
  price,
  features,
  highlighted,
  onSelect
}) {
  const {
    Card,
    Button,
    Badge
  } = window.TheIOPrepDesignSystem_433c05;
  return React.createElement(Card, {
    style: {
      width: 280,
      border: highlighted ? '1px solid var(--gold)' : '1px solid var(--border-hairline)',
      boxShadow: highlighted ? 'var(--shadow-raised)' : 'var(--shadow-card)'
    }
  }, highlighted && React.createElement(Badge, {
    tone: 'gold'
  }, 'Most popular'), React.createElement('div', {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--oxford-blue)',
      margin: '12px 0 4px'
    }
  }, plan), React.createElement('div', {
    style: {
      font: 'var(--fw-bold) 36px/1 var(--font-serif-display)',
      color: 'var(--oxford-blue)',
      margin: '8px 0 16px'
    }
  }, price), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 20
    }
  }, features.map((f, i) => React.createElement('div', {
    key: i,
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-body)'
    }
  }, '\u2014 ' + f))), React.createElement(Button, {
    variant: highlighted ? 'gold' : 'secondary',
    onClick: onSelect,
    style: {
      width: '100%'
    }
  }, 'Choose ' + plan));
}
window.PricingCard = PricingCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/checkout/PricingCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/LessonTabs.jsx
try { (() => {
function LessonTabs({
  active,
  onChange
}) {
  const {
    Tabs
  } = window.TheIOPrepDesignSystem_433c05;
  return React.createElement('div', {
    style: {
      padding: '0 32px'
    }
  }, React.createElement(Tabs, {
    tabs: ['Overview', 'Transcript', 'Resources', 'Past papers'],
    active,
    onChange
  }));
}
window.LessonTabs = LessonTabs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/LessonTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
function Sidebar({
  lessons,
  activeId,
  onSelect
}) {
  const {
    Badge
  } = window.TheIOPrepDesignSystem_433c05;
  return React.createElement('aside', {
    style: {
      width: 300,
      borderRight: '1px solid var(--border-hairline)',
      background: 'var(--white)',
      padding: '24px 0',
      overflowY: 'auto'
    }
  }, React.createElement('div', {
    style: {
      padding: '0 24px 16px',
      font: 'var(--fw-bold) 20px/1 var(--font-serif-display)',
      color: 'var(--oxford-blue)'
    }
  }, 'The IO Prep'), React.createElement('div', {
    style: {
      padding: '0 24px',
      font: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '16px 0 8px'
    }
  }, 'IB English A&L'), lessons.map(l => React.createElement('div', {
    key: l.id,
    onClick: () => onSelect(l.id),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      cursor: 'pointer',
      background: activeId === l.id ? 'var(--oxford-blue-050)' : 'transparent',
      borderLeft: activeId === l.id ? '2px solid var(--gold)' : '2px solid transparent'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      font: 'var(--text-small)',
      color: activeId === l.id ? 'var(--oxford-blue)' : 'var(--text-body)',
      fontWeight: activeId === l.id ? 700 : 400
    }
  }, l.title), React.createElement('div', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, l.duration)), l.done && React.createElement(Badge, {
    tone: 'success'
  }, 'Done'))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/VideoPlayer.jsx
try { (() => {
function VideoPlayer({
  title
}) {
  const {
    Button
  } = window.TheIOPrepDesignSystem_433c05;
  return React.createElement('div', null, React.createElement('div', {
    style: {
      background: 'var(--gray-900)',
      aspectRatio: '16/9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, React.createElement('div', {
    style: {
      width: 0,
      height: 0,
      borderTop: '14px solid transparent',
      borderBottom: '14px solid transparent',
      borderLeft: '22px solid var(--white)',
      marginLeft: 6
    }
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16,
      height: 4,
      background: 'rgba(255,255,255,0.25)',
      borderRadius: 'var(--radius-pill)'
    }
  }, React.createElement('div', {
    style: {
      width: '38%',
      height: '100%',
      background: 'var(--gold)',
      borderRadius: 'var(--radius-pill)'
    }
  }))), React.createElement('div', {
    style: {
      padding: '24px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--oxford-blue)'
    }
  }, title), React.createElement('div', {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, 'Lesson 4 of 24 \u00b7 22 min')), React.createElement(Button, {
    variant: 'secondary',
    size: 'sm'
  }, 'Mark complete')));
}
window.VideoPlayer = VideoPlayer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/VideoPlayer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CourseGrid.jsx
try { (() => {
const courses = [{
  title: 'IB English A: Language & Literature',
  meta: '24 lessons \u00b7 HL & SL',
  grade: 'Grade 7'
}, {
  title: 'IGCSE English Language',
  meta: '18 lessons \u00b7 First Language',
  grade: 'Grade 9'
}, {
  title: 'IGCSE English Literature',
  meta: '16 lessons \u00b7 Set texts covered',
  grade: 'Grade 9'
}];
function CourseGrid() {
  const {
    Card,
    Badge,
    Button
  } = window.TheIOPrepDesignSystem_433c05;
  return React.createElement('section', {
    style: {
      padding: '80px 48px',
      background: 'var(--white)'
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, 'Courses'), React.createElement('h2', {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--oxford-blue)',
      margin: '0 0 40px'
    }
  }, 'Choose your course'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, courses.map(c => React.createElement(Card, {
    key: c.title
  }, React.createElement(Badge, {
    tone: 'gold'
  }, c.grade), React.createElement('div', {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--oxford-blue)',
      margin: '14px 0 6px'
    }
  }, c.title), React.createElement('div', {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, c.meta), React.createElement(Button, {
    variant: 'secondary',
    size: 'sm'
  }, 'View course')))));
}
window.CourseGrid = CourseGrid;
Object.assign(__ds_scope, { CourseGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CourseGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
function CredentialBand() {
  return React.createElement('section', {
    style: {
      background: 'var(--cream)',
      padding: '80px 48px',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center',
      borderLeft: '2px solid var(--gold)',
      padding: '4px 0 4px 24px',
      textAlignLast: 'left'
    }
  }, React.createElement('p', {
    style: {
      font: 'italic var(--fw-regular) 24px/1.5 var(--font-serif)',
      color: 'var(--oxford-blue)',
      margin: 0
    }
  }, '"Every past-paper question, marked the way examiners actually mark it."'), React.createElement('div', {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, 'Harvard PhD candidate \u00b7 Oxford BA \u00b7 IB 45/45')));
}
function MarketingFooter() {
  return React.createElement('footer', {
    style: {
      background: 'var(--oxford-blue)',
      color: 'var(--oxford-blue-100)',
      padding: '40px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--fw-bold) 18px/1 var(--font-serif-display)',
      color: 'var(--white)'
    }
  }, 'The IO Prep'), React.createElement('div', {
    style: {
      font: 'var(--text-caption)'
    }
  }, '\u00a9 2026 The IO Prep. All rights reserved.'));
}
window.CredentialBand = CredentialBand;
window.MarketingFooter = MarketingFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    Badge
  } = window.TheIOPrepDesignSystem_433c05;
  return React.createElement('section', {
    style: {
      background: 'var(--oxford-blue)',
      color: 'var(--white)',
      padding: '96px 48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 24
    }
  }, React.createElement(Badge, {
    tone: 'gold'
  }, 'Taught by a 45/45 scorer'), React.createElement('h1', {
    style: {
      font: 'var(--text-display)',
      color: 'var(--white)',
      margin: 0,
      maxWidth: 820
    }
  }, 'IGCSE and IB English, taught by the person who scored 45/45.'), React.createElement('p', {
    style: {
      font: 'var(--text-body-lg)',
      fontFamily: 'var(--font-serif)',
      color: 'var(--oxford-blue-100)',
      maxWidth: 640,
      margin: 0,
      lineHeight: 'var(--lh-loose)'
    }
  }, 'A complete video course covering every paper, every assessment objective, and the exact techniques examiners reward \u2014 taught by a Harvard PhD student and ex-Oxford undergraduate.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16
    }
  }, React.createElement(Button, {
    variant: 'gold',
    size: 'lg'
  }, 'Enrol now'), React.createElement(Button, {
    variant: 'ghost',
    size: 'lg',
    style: {
      color: 'var(--white)',
      border: '1px solid var(--oxford-blue-300)'
    }
  }, 'View syllabus')));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingHeader.jsx
try { (() => {
function MarketingHeader({
  onNav,
  active
}) {
  const {
    Button
  } = window.TheIOPrepDesignSystem_433c05;
  const items = ['Courses', 'How it works', 'Results', 'About'];
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--white)'
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--fw-bold) 24px/1 var(--font-serif-display)',
      color: 'var(--oxford-blue)'
    }
  }, 'The IO Prep'), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 32
    }
  }, items.map(i => React.createElement('span', {
    key: i,
    onClick: () => onNav && onNav(i),
    style: {
      font: 'var(--text-body)',
      color: active === i ? 'var(--oxford-blue)' : 'var(--text-muted)',
      cursor: 'pointer',
      borderBottom: active === i ? '2px solid var(--gold)' : '2px solid transparent',
      paddingBottom: 4
    }
  }, i))), React.createElement(Button, {
    variant: 'primary',
    size: 'sm'
  }, 'Enrol now'));
}
window.MarketingHeader = MarketingHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CourseGrid = __ds_scope.CourseGrid;

})();
